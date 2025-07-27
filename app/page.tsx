import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function NaikeMovieWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/poster.jpeg?height=1080&width=1920"
            alt="Naikay Movie Poster"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        {/* Hero Content */}
        {/* <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 text-gray-100 font-mono">
            NAIKAY
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            A Thriller That Will Leave You Breathless
          </p>
        </div> */}

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Plot Section */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center mb-12 text-gray-100 font-mono">
            THE STORY
          </h2>

          <div className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200 font-light text-center">
            <p className="mb-6">
              A family's past is marred by a devastating loss, the true nature of which has been meticulously concealed.
              Decades later, the son of the deceased uncovers unsettling discrepancies surrounding his father's death.
            </p>
            <p className="mb-6">
              His investigation peels back layers of deceit, revealing a shocking act of betrayal from someone
              intimately connected to the family. As the truth surfaces, the protagonist finds himself targeted, forcing
              him into a desperate fight to expose the hidden perpetrator and{" "}
              <span className="text-red-600 font-semibold">finally bring a long-overdue reckoning.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Cast Section */}
      <section className="bg-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center mb-12 text-gray-100 font-mono">
            THE CAST
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            {/* Actor 1 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/umesh.png?height=192&width=192"
                  alt="Umesh Gurung"
                  fill
                  className="rounded-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-red-600 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Umesh Gurung</h3>
              <p className="text-gray-400 font-mono tracking-wide">Lead Actor</p>
            </div>

            {/* Actor 2 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/urmila.png?height=192&width=192"
                  alt="Urmila Gurung"
                  fill
                  className="rounded-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-red-600 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Urmila Gurung</h3>
              <p className="text-gray-400 font-mono tracking-wide">Lead Actress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thematic Divider */}
      <div className="w-full h-px bg-red-600" />

      {/* Crew Section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center mb-12 text-gray-100 font-mono">
            THE CREW
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Crew Member 1 */}
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/binay.jpg?height=128&width=128"
                  alt="Binay Chaudhary"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Binay Chaudhary</h3>
              <p className="text-gray-400 font-mono tracking-wide text-sm">Producer</p>
            </div>

            {/* Crew Member 2 */}
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/chandrabd.jpg?height=128&width=128"
                  alt="Chandra Bahadur Rawat"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Chandra Bahadur Rawat</h3>
              <p className="text-gray-400 font-mono tracking-wide text-sm">Cinematographer</p>
            </div>

            {/* Crew Member 3 */}
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/sagar.jpg?height=128&width=128"
                  alt="Sagar Sapkota"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sagar Sapkota</h3>
              <p className="text-gray-400 font-mono tracking-wide text-sm">Editor</p>
            </div>

            {/* Crew Member 4 */}
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/tikabd.png?height=128&width=128"
                  alt="Tika Bahadur Gurung"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tika Bahadur Gurung</h3>
              <p className="text-gray-400 font-mono tracking-wide text-sm">Writer & Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2024 Naikay The Movie. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
