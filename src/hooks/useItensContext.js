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
		setId(id + 1) //add mais 1 ao id

        //zerar o formulário
		setQuantidade('')
		setitem('')

        //tipo e texto da toast
        const sucesso = toast.success('Adicionado com sucesso!');
		
		return (
            setOsItens([...osItens, { item, quantidade, id }]), 
            sucesso)
	}

    // Deletar item da lista
    const aoDeletar = (id) =>{
        const produto = osItens.filter(item =>{
            return item.id !== id
        })
        return setOsItens(produto)
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