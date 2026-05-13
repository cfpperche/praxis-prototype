import { useReveal } from '../hooks/useReveal.js';

export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }) {
  const [ref, revealed] = useReveal();
  const base = 'transition-all duration-700 ease-out will-change-transform';
  const state = revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3';
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <Tag ref={ref} style={style} className={`${base} ${state} ${className}`}>
      {children}
    </Tag>
  );
}
