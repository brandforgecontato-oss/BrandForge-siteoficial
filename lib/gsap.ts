// Registro único dos plugins do GSAP (modelo: stack-web/assets/gsap-registro.ts, sem SplitText).
// Importe gsap, ScrollTrigger e useGSAP SEMPRE daqui, e só em componentes "use client".
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  // Evita recalcular tudo quando a barra de endereço do celular aparece/some.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrollTrigger, useGSAP };
