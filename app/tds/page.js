'use client';
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default async function TDS() {
    const TDS = await getNormalizedGamesDataByCategory(endpoints.games, "TDS");

    return (
        <main className={"main-inner"}>
            {TDS ? (
                <CardsListSection id="TDS" title="TDS" data={TDS} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}