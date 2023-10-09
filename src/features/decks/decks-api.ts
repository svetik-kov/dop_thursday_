import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.flashcards.andrii.es/v1/',
    headers: {
        'x-auth-skip': true,
    },
})

export const decksAPI = {
    getDecks() {
        return instance.get<FetchDecksResponse>('decks')
    }
}


//type (json2ts)
export type FetchDecksResponse = {
	items: Decks[];
	pagination: Pagination;
	maxCardsCount: number;
}
export type Author = {
	id: string;
	name: string;
}
export type Decks = {
	author: Author;
	id: string;
	userId: string;
	name: string;
	isPrivate: boolean;
	shots: number;
	cover: string;
	rating: number;
	created: string;
	updated: string;
	cardsCount: number;
}
export type Pagination = {
	currentPage: number;
	itemsPerPage: number;
	totalPages: number;
	totalItems: number;
}