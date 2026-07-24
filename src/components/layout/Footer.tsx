export function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-card-border text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sara MohammedAhmed. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Designed for high-performance data operations.
        </p>
      </div>
    </footer>
  );
}
