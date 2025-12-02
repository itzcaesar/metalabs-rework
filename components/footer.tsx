export function Footer() {
  return (
    <footer className="border-t py-8 mt-12 w-full">
      <div className="px-4">
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Metalabs - Telkom University. All
            rights reserved.
          </p>
          <p className="mt-2">
            Interactive Multimedia Engineering Research Laboratory
          </p>
        </div>
      </div>
    </footer>
  );
}
