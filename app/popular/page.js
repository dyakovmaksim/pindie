'use client';
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default async function Popular() {
    const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");
    return (
        <main className="main-inner">
            {popularGames ? (
                <CardsListSection id="popular" title="Популярные" data={popularGames} />
            ) : (
                <Preloader />
            )}
        </main>
    );
} 