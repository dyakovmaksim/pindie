'use client';
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default async function Pixel() {
    const pixel = await getNormalizedGamesDataByCategory(endpoints.games, "pixel");

    return (
        <main className="main-inner">
            {pixel ? (
                <CardsListSection id="new" title="Пиксельные" data={pixel} />
            ) : (
                <Preloader />
            )}
        </main>
    );
} 