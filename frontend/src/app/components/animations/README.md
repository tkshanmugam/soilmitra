# Animation System Documentation

This document describes the comprehensive animation system implemented for the SoilMitra application using Framer Motion.

## Components

### 1. PageTransition
Provides smooth page transitions between routes.

```tsx
import { PageTransition } from "./components/animations";

<PageTransition>
  {children}
</PageTransition>
```

### 2. AnimatedSection
Scroll-triggered animations for sections with directional options.

```tsx
import { AnimatedSection } from "./components/animations";

<AnimatedSection 
  direction="up" 
  delay={0.2} 
  duration={0.6}
>
  <div>Your content</div>
</AnimatedSection>
```

**Props:**
- `direction`: "up" | "down" | "left" | "right"
- `delay`: Animation delay in seconds
- `duration`: Animation duration in seconds
- `once`: Whether to animate only once (default: true)

### 3. AnimatedCard
Card animations with hover effects.

```tsx
import { AnimatedCard } from "./components/animations";

<AnimatedCard 
  delay={0.1} 
  hover={true} 
  scale={true}
>
  <div>Card content</div>
</AnimatedCard>
```

**Props:**
- `delay`: Animation delay in seconds
- `hover`: Enable hover animations (default: true)
- `scale`: Enable scale on hover (default: true)

### 4. AnimatedText
Text animations with word or character staggering.

```tsx
import { AnimatedText } from "./components/animations";

<AnimatedText 
  type="word" 
  stagger={0.1} 
  delay={0.2}
>
  Your animated text here
</AnimatedText>
```

**Props:**
- `type`: "word" | "character"
- `stagger`: Delay between each word/character
- `delay`: Initial animation delay

### 5. LoadingAnimation
Beautiful loading spinner with customizable options.

```tsx
import { LoadingAnimation } from "./components/animations";

<LoadingAnimation 
  size="md" 
  color="emerald" 
  text="Loading..."
/>
```

**Props:**
- `size`: "sm" | "md" | "lg"
- `color`: "emerald" | "green" | "blue" | "purple" | "orange"
- `text`: Loading text (optional)

### 6. FloatingElement
Decorative floating animations.

```tsx
import { FloatingElement } from "./components/animations";

<FloatingElement 
  direction="up" 
  duration={3} 
  distance={10}
>
  <div>Floating content</div>
</FloatingElement>
```

**Props:**
- `direction`: "up" | "down" | "left" | "right" | "diagonal"
- `duration`: Animation duration in seconds
- `delay`: Animation delay in seconds
- `distance`: Movement distance in pixels

## Hooks

### useAnimations
Provides common animation variants and transitions.

```tsx
import { useAnimations } from "./components/animations";

const { pageVariants, cardVariants, transitions } = useAnimations();
```

**Available variants:**
- `pageVariants`: Page transition animations
- `sectionVariants`: Section animations
- `cardVariants`: Card animations with hover
- `textVariants`: Text animations
- `staggerContainer`: Container for staggered animations
- `staggerItem`: Individual staggered items
- `fadeIn`: Simple fade in
- `slideUp`, `slideDown`, `slideLeft`, `slideRight`: Directional slides
- `scale`: Scale animations

**Available transitions:**
- `smooth`: 0.6s duration
- `fast`: 0.3s duration
- `slow`: 1s duration

## CSS Classes

The following CSS classes are available for quick animations:

- `.animate-fade-in`
- `.animate-slide-in`
- `.animate-scale-in`
- `.animate-slide-up`
- `.animate-slide-down`
- `.animate-slide-left`
- `.animate-slide-right`
- `.animate-float`
- `.animate-pulse-slow`

### Hover Effects

- `.hover-lift`: Lifts element on hover
- `.hover-scale`: Scales element on hover
- `.hover-glow`: Adds shadow glow on hover

## Best Practices

1. **Performance**: Use `once={true}` for scroll-triggered animations to avoid re-triggering
2. **Accessibility**: Ensure animations respect `prefers-reduced-motion` media query
3. **Consistency**: Use the same easing curves and durations across similar elements
4. **Staggering**: Use staggered animations for lists and grids to create visual flow
5. **Loading States**: Always provide loading animations for async operations

## Example Usage

```tsx
import { 
  AnimatedSection, 
  AnimatedCard, 
  AnimatedText,
  LoadingAnimation 
} from "./components/animations";

export default function MyPage() {
  return (
    <div>
      <AnimatedSection>
        <AnimatedText type="word" stagger={0.1}>
          Welcome to our amazing app
        </AnimatedText>
      </AnimatedSection>
      
      <div className="grid grid-cols-3 gap-6">
        {items.map((item, index) => (
          <AnimatedCard key={item.id} delay={index * 0.1}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}
```

## Customization

All animations use the cubic-bezier easing curve `[0.25, 0.46, 0.45, 0.94]` for smooth, natural movement. You can customize this in the `useAnimations` hook or individual components.
