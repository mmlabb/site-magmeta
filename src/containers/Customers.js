import Image from "next/image";

export default function Clientes() {
  return (
    <section id="quarta-sessao" className="pt-5 mb-5 pt-5 mt-5">
      <div className="container text-center cont-logos pb-5 mb-5">
        <div className="row linha-logos  pb-5 align-items-center justify-content-center">
          <div className="col-md-4 col-6">
            <Image
              src="/assets/img/logo-cadcam-white.svg"
              alt="logo-usados-cad"
              className="logo-marca logo"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "auto", height: "auto" }} // optional
            />
          </div>
          <div className="col-md-4 col-6">
            <Image
              src="/assets/img/logo-mclove-white.svg"
              alt="logo-mclove"
              className="logo-marca logo"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "auto", height: "auto" }} // optional
            />
          </div>
          <div className="col-md-4 col-6">
            <Image
              src="/assets/img/logo-klubi-white.svg"
              alt="logo-klubi"
              className="logo-marca logo"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "auto", height: "auto" }} // optional
            />
          </div>
        </div>
      </div>
    </section>
  );
}
