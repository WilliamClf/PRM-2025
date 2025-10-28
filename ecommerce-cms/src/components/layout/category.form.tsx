import { useCategory, } from "@/categories/hooks/use-category";
import {SideBarForm} from "@/components/layout/sidebar-form";
import { useParams } from "react-router-dom";

export function CategoryForm() {
    const {id} = useParams<{ id: string }>();
    const {data, isLoading} = useCategory(id ?? '');
    function handleSave() {
        
    }

    return (
        <SideBarForm title="Categoria"
        onSave={handleSave}
        >
            {isLoading ? (
                <h4>Carregando...</h4>
            ) : (
                <p>
                    {JSON.stringify(data)}
                </p>
            )}     
        </SideBarForm>
    )
}