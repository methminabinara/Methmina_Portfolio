import { Header } from "../Header";
import { ThemeProvider } from "../ThemeProvider";

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Header />
      <div className="pt-16 p-8">
        <p className="text-muted-foreground">Scroll down to see the header behavior</p>
      </div>
    </ThemeProvider>
  );
}
