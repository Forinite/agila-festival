import React from 'react'
import ClientPlayerCardButtons from "@/app/ui/Components/PlayersSectionUI/ClientPlayerCardButtons";
import players from "@/app/constants/players";

const SamplePlayers = () => {
    return (
        <section className={'md:px-16 lg:px-44'}>
            {/* Heading */}
            <div className="text-center mb-12 animate-in fade-in duration-1000">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0ea5a4]">
                    Our Players
                </h1>
                <p className="text-base text-gray-600 max-w-xl mx-auto">
                    Discover our roster of talented athletes, from rising stars to global icons, shaping the future of football.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {players.slice(0,3).map((player, index)=>( <div
                key={player.id}
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`player-card-${player.id}`}
            >
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 lg:h-64">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <img
                        src={player.image || "/placeholder-player.jpg"}
                        alt={player.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-[#ef4444] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                    {player.role}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0ea5a4] mb-2">
                        {player.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Age: {player.age} • Club: {player.club}
                    </p>
                    <div className="mb-4">
                        <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">
                            Achievements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {player.achievements.map((ach, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center rounded-full border px-2 sm:px-3 py-1 font-medium text-xs border-gray-200 text-gray-700 bg-gray-100"
                                >
                          {ach}
                        </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <ClientPlayerCardButtons player={player} isListView={false} />
                </div>
            </div>
            ))}
        </div>

            <a href={'/Players'} className={'bg-teal-600 text-white  md:px-12 px-6 md:text-base text-sm  border border-teal-700 w-fit  py-2  rounded-lg  mx-auto mt-12 block hover:scale-110 transition-all '}>
                See All Players
            </a>
        </section>
    )
}
export default SamplePlayers
