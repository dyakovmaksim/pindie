'use client';
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default async function New() {
    const newGames = await getNormalizedGamesDataByCategory(endpoints.games, "new");

    return (
        <main className="main-inner">
            {newGames ? (
                <CardsListSection id="new" title="Новые" data={newGames} />
            ) : (
                <Preloader />
            )}
        </main>
    );
} 