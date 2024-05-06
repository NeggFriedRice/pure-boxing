import React from 'react'

export default function Membership() {
  return (
    <>
        <div className="flex justify-center bg-black pt-8">
            <h1 className="font-[BuiltTitling] text-[5rem]">Memberships</h1>
        </div>
        <div className="flex justify-center bg-black pb-4">
            <div className="lg:flex lg:flex-wrap lg:justify-between lg:w-[1000px] lg:py-4">
                <div className="gold-box bg-white text-black w-[70vw] lg:w-[450px] rounded-lg text-center my-12 lg:my-4 py-4 mx-4 border-4 border-yellow-400 font-[BuiltTitling]">
                    <h3 className="text-[1.5rem] lg:text-[2.5rem]">Gold Membership</h3>
                    <p className="text-[2rem] lg:text-[3rem]">$47 per week</p>
                    <p className="text-[1.25rem] lg:text-[2.25rem]">$88 PW for couples</p>
                    <div className="flex justify-center py-4">
                        <div className="h-[1px] w-[60%] bg-yellow-300"></div>
                    </div>
                    <ul className="text-[1.5rem]">
                        <li>Unlimited group classes</li>
                        <li>Open gym access</li>
                        <li>Sauna access</li>
                        <li>Recovery lounge access</li>
                        <li>Coffee & breakfast</li>
                        <li>Nutrition app access</li>
                    </ul>
                </div>
                <div className="silver-box bg-white text-black w-[70vw]  lg:w-[450px] rounded-lg text-center my-12 lg:my-4 py-4 mx-4 border-4 border-gray-300 font-[BuiltTitling]">
                    <h3 className="text-[1.5rem] lg:text-[2.5rem]">Silver Membership</h3>
                    <p className="text-[2rem] lg:text-[3rem]">$37 per week</p>
                    <div className="flex justify-center py-4">
                        <div className="h-[1px] w-[60%] bg-gray-300"></div>
                    </div>
                    <ul className="text-[1.5rem]">
                        <li>2 group classes per week (incl. yoga)</li>
                        <li>Sauna access</li>
                        <li>Recovery lounge access</li>
                        <li>Coffee & breakfast</li>
                        <li>Nutrition app access</li>
                    </ul>
                </div>
                <div className="sport-box bg-white text-black w-[70vw]  lg:w-[450px] rounded-lg text-center my-12 lg:my-4 py-4 mx-4 border-4 border-red-600 font-[BuiltTitling]">
                    <h3 className="text-[1.5rem] lg:text-[2.5rem]">Sporting Groups</h3>
                    <p className="text-[2rem] lg:text-[3rem]">$10 per session</p>
                    <div className="flex justify-center py-4">
                        <div className="h-[1px] w-[60%] bg-red-300"></div>
                    </div>
                    <ul className="text-[1.5rem]">
                        <li>45 minute sessions</li>
                        <li>Healthy snacks included</li>
                    </ul>
                </div>
                <div className="junior-box bg-white text-black w-[70vw]  lg:w-[450px] rounded-lg text-center my-12 lg:my-4 py-4 mx-4 border-4 border-green-300 font-[BuiltTitling]">
                    <h3 className="text-[1.5rem] lg:text-[2.5rem]">Juniors Strength Academy</h3>
                    <p className="text-[2rem] lg:text-[3rem]">$37 per week</p>
                    <div className="flex justify-center py-4">
                        <div className="h-[1px] w-[60%] bg-green-300"></div>
                    </div>
                    <ul className="text-[1.5rem]">
                        <li>12 - 18 year old</li>
                        <li>Unlimited group classes</li>
                        <li>Open gym access</li>
                        <li>Recovery lounge access</li>
                        <li>Breakfast</li>
                        <li>Nutrition app access</li>
                    </ul>
                </div>
                <div className="recovery-box bg-white text-black w-[70vw]  lg:w-[450px] rounded-lg text-center my-12 lg:my-4 py-4 mx-4 border-4 border-violet-400 font-[BuiltTitling]">
                    <h3 className="text-[1.5rem] lg:text-[2.5rem]">Recovery Lounge Membership</h3>
                    <p className="text-[2rem] lg:text-[3rem]">$37 per week</p>
                    <div className="flex justify-center py-4">
                        <div className="h-[1px] w-[60%] bg-violet-400"></div>
                    </div>
                    <ul className="text-[1.5rem]">
                        <li>Unlimited Recovery lounge access</li>
                        <li>Unlimited sauna access</li>
                        <li>Unlimited compression boots use</li>
                        <li>Unlimited foot massager use</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
