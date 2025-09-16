import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold text-secondary mb-4">Página no encontrada</h1>
        <p className="text-muted-foreground mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-primary hover:bg-primary-hover text-white"
        >
          Volver al Inicio
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
