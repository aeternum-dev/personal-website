export default function LoadingMole() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative">
        {/* Spinning gear/cog in background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-32 h-32 text-muted-foreground/20 animate-spin"
            style={{ animationDuration: '3s' }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L13.09 6.26L16.18 3.82L15.46 8.27L19.07 7.07L17.18 11.18L21 11L17.27 13.82L20.09 16.36L15.91 15.64L16.36 20.09L12.54 17.27L12 21L11.46 17.27L7.64 20.09L8.09 15.64L3.91 16.36L6.73 13.82L3 11L6.82 11.18L4.93 7.07L8.54 8.27L7.82 3.82L10.91 6.26L12 2Z" />
          </svg>
        </div>

        {/* Mole with construction hat */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="text-6xl animate-bounce" style={{ animationDuration: '1.5s' }}>
            🦫
          </div>
          <div className="text-4xl -mt-8 ml-2">
            🪖
          </div>
          <p className="text-muted-foreground mt-4 font-medium">
            Digging up posts...
          </p>
        </div>

        {/* Spinning connector circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-24 h-24">
            <div
              className="absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full animate-spin"
              style={{ 
                animationDuration: '2s',
                transformOrigin: '0 12px'
              }}
            />
            <div
              className="absolute top-0 left-1/2 w-2 h-2 bg-accent/60 rounded-full animate-spin"
              style={{ 
                animationDuration: '2s',
                animationDelay: '0.5s',
                transformOrigin: '0 12px'
              }}
            />
            <div
              className="absolute top-0 left-1/2 w-2 h-2 bg-accent/30 rounded-full animate-spin"
              style={{ 
                animationDuration: '2s',
                animationDelay: '1s',
                transformOrigin: '0 12px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
