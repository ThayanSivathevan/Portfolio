"use client";
import React, { useRef, useEffect, useState } from 'react';

type Props = {
    children: string | JSX.Element | JSX.Element[],
}

export default function DynamicView({ children }: Props) {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setLoaded(entry.isIntersecting);
                });
            },
            {
                rootMargin: '0px',
            }
        );

        observer.observe(ref.current as Element);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="w-full h-full" >
            {loaded && (
                children
            )}
        </div>
    );
}