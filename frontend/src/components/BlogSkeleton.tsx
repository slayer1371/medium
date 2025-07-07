
export const BlogSkeleton = () => {
    return <div role="status" className="max-w-2xl animate-pulse">
              <div className="p-4 border-b border-slate-200 pb-4">
                    <div className="flex">
                         <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
                        <div className="font-extralight pl-2 flex justify-center flex-col text-sm">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div> 
                        <div className="pl-2 font-thin text-slate-400 flex justify-center flex-col text-sm">
                                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

                        </div>
                        
                    </div>
                    <div className="text-xl font-semibold pt-2">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

                    </div>
                    <div className="text-xl font-thin">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

                    </div>
                    <div className="text-slate-400 text-sm">
                           <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

                    </div>
                </div>
    <span className="sr-only">Loading...</span>
</div>
}