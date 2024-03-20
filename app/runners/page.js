'use client';
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { Preloader } from "../components/Preloader/Preloader";

export default async function Runners() {
    const runnerGames = await getNormalizedGamesDataByCategory(endpoints.games, "runner");

    return (
        <main className={"main-inner"}>
            {runnerGames ? (
                <CardsListSection id="runners" title="Ранеры" data={runnerGames} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}