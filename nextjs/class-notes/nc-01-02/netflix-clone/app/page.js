
//? nextjs'de tum componentler default olarak server componenttir. Client component kullanmak icin "use-client" direktifini kullanmamiz gerekir.

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
    </div>
  );
}
