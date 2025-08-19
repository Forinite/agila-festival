export default function GetStartedForm() {
    return (
        <div className="rounded-lg bg-gray-100 shadow-md">
            <div className="p-6">
                <form className="space-y-6">
                    <div className="space-y-4">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Full Name *</label>
                            <input
                                name="fullName"
                                placeholder="Enter your full name"
                                className="w-full border border-gray-300 rounded-md p-2
                focus:ring-[#0ea5a4] focus:border-[#0ea5a4]"
                            />
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    className="w-full border border-gray-300 rounded-md p-2
                  focus:ring-[#0ea5a4] focus:border-[#0ea5a4]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Phone Number</label>
                                <input
                                    name="phone"
                                    placeholder="+234..."
                                    className="w-full border border-gray-300 rounded-md p-2
                  focus:ring-[#0ea5a4] focus:border-[#0ea5a4]"
                                />
                            </div>
                        </div>

                        {/* Position & Age */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Position *</label>
                                <select
                                    name="position"
                                    className="w-full border border-gray-300 rounded-md p-2
                  focus:ring-[#0ea5a4] focus:border-[#0ea5a4]"
                                >
                                    <option value="">Select your position</option>
                                    <option value="goalkeeper">Goalkeeper</option>
                                    <option value="defender">Defender</option>
                                    <option value="midfielder">Midfielder</option>
                                    <option value="striker">Striker</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Age *</label>
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="18"
                                    min={16}
                                    max={40}
                                    className="w-full border border-gray-300 rounded-md p-2
                  focus:ring-[#0ea5a4] focus:border-[#0ea5a4]"
                                />
                            </div>
                        </div>

                        {/* Current Club */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Current Club</label>
                            <input
                                name="club"
                                placeholder="Enter your current club"
                                className="w-full border border-gray-300 rounded-md p-2
                focus:ring-[#0ea5a4] focus:border-[#0ea5a4]"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#0ea5a4] text-white py-2 rounded-md
            hover:bg-[#0c8b8b] transition"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
}
