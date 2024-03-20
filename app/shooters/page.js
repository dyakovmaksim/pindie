'use client';
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default async function Shooters() {
    const shooterGames = await getNormalizedGamesDataByCategory(endpoints.games, "shooter");

    return (
        <main className={"main-inner"}>
            {shooterGames ? (
                <CardsListSection id="shooter" title="Шутеры" data={shooterGames} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}