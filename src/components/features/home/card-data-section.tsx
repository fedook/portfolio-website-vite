import { Card } from "@/components/ui/card";

export function CardDataSection() {
  const products = [
    {
      "id": 1,
      "name": "Nokia",
      "description": "Lig on pas inyong relasyon"
    },
    {
      "id": 2,
      "name": "Samsung 1",
      "description": "Pero Triple A ang battery"
    },
    {
      "id": 3,
      "name": "QNet",
      "description": "Pero mo shagit ka mo type"
    },
    {
      "id": 4,
      "name": "QNet",
      "description": "Pero mo shagit ka mo type"
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <Card key={product.id} title={product.name}
          description={product.description}
          buttonLabel="Click Me"
          buttonVariant="primary"
        />
      ))}
    </section>

  )
}