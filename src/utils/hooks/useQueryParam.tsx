import { useLocation } from 'react-router-dom';

export default function useQueryParam() {
    const { search } = useLocation();
    return new URLSearchParams(search);
}