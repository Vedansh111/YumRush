const ShimmerMenu = () => {
    return (
        <div>
            <h1 className="flex tracking-tighter font-middle text-3xl shadow-xl rounded-xl w-72 h-16 mx-auto my-4 py-3 px-5 animate-pulse"></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-5">
                {Array(12).fill('').map((e, index) => {
                    return <div key={index}>
                        <div class="py-4 px-3">
                            <div class="max-w-md w-full border bg-slate-50 shadow-lg rounded-xl p-6">
                                <div className="flex-col">
                                    <div class="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center rounded-2xl h-62 mb-3"></div>
                                    <div class="m-2">
                                        <h2 class="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                                        <div className="flex items-center w-full justify-between min-w-0 ">
                                            <h1 class="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                                            <span class="bg-green-400 h-4 w-16 py-1 mb-4 ml-3 rounded-lg animate-pulse px-2 inline-flex text-sm"></span>
                                        </div>
                                        <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-300"></p>
                                        <p class="leading-relaxed mb-3 w-1/3 h-3 animate-pulse bg-gray-300"></p>
                                        <div class="text-sm font-medium justify-start py-3 ml-1 ">
                                            <a class="bg-purple-400 rounded-full h-6 animate-pulse mt-2 w-24 inline-flex items-center md:mb-2 lg:mb-0">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ShimmerMenu;