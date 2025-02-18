import axios from "axios";

const kumanimeApi = import.meta.env.VITE_KUMANIME_API;
const consumetApi = import.meta.env.VITE_CONSUMET_API;

export const getLatestAnime = async () => {
    try {
        const response = await axios.get(`${kumanimeApi}/home`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const getAnimeNews = async () => {
    try {
        const response = await axios.get(`${consumetApi}/news/ann/recent-feeds`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const getAnimeNewsDetail = async (id) => {
    try {
        const response = await axios.get(`${consumetApi}/news/ann/info?id=${id}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const getEpisodeDetails = async (slug) => {
    try {
        const response = await axios.get(`${kumanimeApi}/episode/${slug}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const getAnimeDetails = async (slug) => {
    try {
        const response = await axios.get(`${kumanimeApi}/anime/${slug}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const getSearchResult = async (value) => {
    try {
        const response = await axios.get(`${kumanimeApi}/search/${value}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const getCompletedAnime = async (page) => {
    try {
        const response = await axios.get(`${kumanimeApi}/completed/page/${page}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const getOngoingAnime = async (page) => {
    try {
        const response = await axios.get(`${kumanimeApi}/ongoing/page/${page}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const sanitize = (text) => {
    if (text != undefined) {
        return text
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
    }
};
