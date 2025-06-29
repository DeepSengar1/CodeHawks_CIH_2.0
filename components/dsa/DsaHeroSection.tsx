import React from "react";

function DsaHeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      <div className="relative container mx-auto px-4 py-8 sm:py-10 lg:py-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="space-y-3">
            <p className="text-sm font-medium text-primary/80 tracking-wide uppercase">
              Learn • Solve • Improve
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Data Structures &
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Algorithms
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            Master essential concepts for technical interviews and competitive
            programming
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>200+ structured practice questions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>Multiple Difficulty Levels</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>Various Topics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DsaHeroSection;
