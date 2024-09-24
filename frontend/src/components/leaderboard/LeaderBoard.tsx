import Card from "./Card";

export function LeaderBoard({ leaderboardData }: { 
    leaderboardData: Array<{ 
        points: number; 
        username: string; 
        profilePicture: string 
    }> // Corrected this line to define `leaderboardData` as an array of objects
}) {

    return (
        <div className="bg-opacity-20 bg-white backdrop-blur-5 border border-opacity-30 border-solid border-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl text-center my-4 text-white">
                Leaderboard Results 🚀
            </h1>
            <div className="">
                {leaderboardData.map((el, index) => (
                    <div key={index} className="flex justify-center">
                        <Card
                            sno={index + 1}
                            name={el.username}
                            points={el.points}
                            image={el.profilePicture}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
