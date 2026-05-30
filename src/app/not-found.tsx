import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <p className="font-mono text-6xl font-bold text-surface-tertiary">404</p>
      <div>
        <h1 className="mb-2 text-xl font-semibold text-text-primary">Página não encontrada</h1>
        <p className="text-sm text-text-secondary">Essa rota não existe ou foi movida.</p>
      </div>
      <Button href="/" variant="secondary">Voltar para o início</Button>
    </div>
  );
}
