import {  useContext, useState } from "react"
import { toast } from 'react-toastify';
import { ItensContext } from "../context/ItensContext";


export const useItensContext = () =>{
    const {osItens, setOsItens} = useContext(ItensContext)
    
    //Add produto na lista
    const [item, setitem] = useState("");
	const [quantidade, setQuantidade] = useState("");
	const [id, setId] = useState(0);

    const aoSalvar = (event) => {
		event.preventDefault();
		setId(id + 1)
		setitem('')
		setQuantidade('')
        const sucesso = toast.success('Adicionado com sucesso!');
		
		return setOsItens([...osItens, { item, quantidade, id }]), sucesso
	}

    // Deletar item da lista
    const aoDeletar = (id) =>{
        return setOsItens(deletarItem =>{
            deletarItem.filter(deletar => deletar.id !== id)
        })
    }




    return {
        osItens,
        setOsItens,
        aoSalvar,
        aoDeletar,
        item,
        setitem,
        quantidade,
        setQuantidade,
        id,

    }
}