'use client'
import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

// Предопределенные настройки для разных режимов карусели
const carouselPresets = {
  // Стандартные настройки с четкой остановкой на каждом слайде
  default: {
    align: "center",
    loop: false,
    skipSnaps: false,
    inertia: 0.2,
    speed: 10,
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 1
  },
  // Настройки для плавной прокрутки с инерцией
  smooth: {
    align: "start",
    loop: false,
    skipSnaps: true,
    inertia: 0.8,
    speed: 20,
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1
  },
  // Настройки для бесконечной карусели
  infinite: {
    align: "center",
    loop: true,
    skipSnaps: false,
    inertia: 0.4,
    speed: 15,
    dragFree: false,
    slidesToScroll: 1
  }
}

const Carousel = React.forwardRef(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      scrollMode = 'default', // Добавлен новый проп для выбора режима прокрутки
      ...props
    },
    ref
  ) => {
    // Выбор предустановленных настроек в зависимости от режима
    const presetOpts = carouselPresets[scrollMode] || carouselPresets.default
    
    // Объединение пользовательских опций с предустановленными настройками
    const mergedOpts = { ...presetOpts, ...opts }

    const [carouselRef, api] = useEmblaCarousel(
      {
        ...mergedOpts,
        axis: orientation === 'horizontal' ? 'x' : 'y'
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api) => {
      if (!api) {
        return
      }
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    // Адаптация скорости прокрутки в зависимости от режима
    const getScrollSpeed = () => {
      switch (scrollMode) {
        case 'smooth': return 25
        case 'infinite': return 20
        default: return 10
      }
    }

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev({ speed: getScrollSpeed() })
    }, [api, scrollMode])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext({ speed: getScrollSpeed() })
    }, [api, scrollMode])

    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === 'ArrowRight') {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      // Добавлена расширенная настройка после инициализации
      api.on('init', () => {
        onSelect(api)
      })

      onSelect(api)
      api.on('reInit', onSelect)
      api.on('select', onSelect)

      return () => {
        api?.off('select', onSelect)
        api?.off('init', onSelect)
        api?.off('reInit', onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts: mergedOpts,
          scrollMode,
          orientation:
            orientation || (mergedOpts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('relative', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        aria-label={`carousel btn`}
        className={cn(
          'absolute h-8 w-8 rounded-full',
          orientation === 'horizontal'
            ? '-left-12 top-1/2 -translate-y-1/2'
            : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
          className
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    )
  }
)
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
      <Button
        aria-label={`carousel btn2`}
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'absolute h-8 w-8 rounded-full',
          orientation === 'horizontal'
            ? '-right-12 top-1/2 -translate-y-1/2'
            : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    )
  }
)
CarouselNext.displayName = 'CarouselNext'

const CarouselCounter = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { api } = useCarousel()
    const [totalSlides, setTotalSlides] = React.useState(0)
    const [selectedIndex, setSelectedIndex] = React.useState(0)
  
    React.useEffect(() => {
      if (!api) return
  
      const updateSelectedIndex = () => {
        setSelectedIndex(api.selectedScrollSnap() + 1)
      }
  
      setTotalSlides(api.scrollSnapList().length)
      updateSelectedIndex()
  
      api.on('select', updateSelectedIndex)
      api.on('reInit', updateSelectedIndex)
  
      return () => {
        api.off('select', updateSelectedIndex)
        api.off('reInit', updateSelectedIndex)
      }
    }, [api])
  
    return (
      <div
        ref={ref}
        className={cn(
          'absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-black/90 px-3 py-2 text-[12px] text-white',
          className
        )}
        {...props}
      >
        {selectedIndex} / {totalSlides}
      </div>
    )
  }
)

CarouselCounter.displayName = 'CarouselCounter'

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselCounter
}