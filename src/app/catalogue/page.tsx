export default function Gallery() {
  return (
    <div className="bg-gray-50 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Gallery
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
        Explore our latest collections and timeless designs. Each piece is
        crafted with care, combining traditional artistry with contemporary
        style.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {/* Gallery images */}
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src="/bg6.jpg"
            alt="Collection 1"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src="/cs18.jpg"
            alt="Collection 2"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src="/cs2.jpg"
            alt="Collection 3"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src="/cs3.webp"
            alt="Collection 4"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src="/cs4.webp"
            alt="Collection 4"
            className="w-full h-full 
            object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img src="/cs24.webp" alt="Collection 4" className="w-full h-full 
        object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
         <img src="/cs25.webp" alt="Collection 4" className="w-full h-full 
         object-cover transition-transform duration-300 group-hover:scale-105" />
         </div>
         <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img src="/cs12.jpg" alt="Collection 4" className="w-full h-full 
          object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>

      </div>
    </div>
  );
}
