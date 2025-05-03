import { useEffect } from "react";
import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const curYear = new Date().getFullYear();

export default function Footer() {
  const { setSectionInView } = useView();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!window.driftt) {
      const driftScript = document.createElement("script");
      driftScript.type = "text/javascript";
      driftScript.async = true;
      driftScript.crossOrigin = "anonymous";
      driftScript.innerHTML = `
        "use strict";
        !function() {
          var t = window.driftt = window.drift = window.driftt || [];
          if (!t.init) {
            if (t.invoked) return;
            t.invoked = !0;
            t.methods = ["identify","config","track","reset","debug","show","ping","page","hide","off","on"];
            t.factory = function(e) {
              return function() {
                var n = Array.prototype.slice.call(arguments);
                n.unshift(e);
                t.push(n);
                return t;
              };
            };
            t.methods.forEach(function(e) {
              t[e] = t.factory(e);
            });
            t.load = function(tid) {
              var e = 300000;
              var n = Math.ceil(new Date() / e) * e;
              var o = document.createElement("script");
              o.type = "text/javascript";
              o.async = true;
              o.crossOrigin = "anonymous";
              o.src = "https://js.driftt.com/include/" + n + "/" + tid + ".js";
              var i = document.getElementsByTagName("script")[0];
              i.parentNode.insertBefore(o, i);
            };
          }
        }();
        drift.SNIPPET_VERSION = '0.3.1';
        drift.load('pwchgguiry8h');
      `;
      document.body.appendChild(driftScript);
    }
  }, []);

  return (
    <section
      id="footer"
      className="my-6 sm:my-8 text-sm sm:text-base lg:text-lg flex md:justify-between justify-center"
    >
      <p>
        <span className="text-xl sm:text-2xl">&copy;</span> {curYear} . Aidrain Alcantara . ALL RIGHTS RESERVED
      </p>
      <Link
        className="md:flex hidden items-center gap-1 leading-tight"
        href="#home"
        data-blobity-offset-x="2"
        data-blobity-offset-y="0"
        onClick={() => setSectionInView("home")}
      >
        <Icon icon="mdi:arrow-top" className="text-2xl rounded-2xlt" />
        <p className="underline leading-tight">SCROLL TO TOP</p>
      </Link>
    </section>
  );
}
