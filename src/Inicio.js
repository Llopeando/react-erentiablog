import { useState } from "react";

const Inicio = () => {
	const [posts, setPosts] = useState([
		{titulo: 'Bienvenido al Erentia Blog!', body: 'Lorem ipsum! Epicardo lorem ipsum...', autor: 'AllPlayed', categoria: '🗞️ Noticia', id:0},
		{titulo: 'Día 2 de Erentia', body: 'Lorem ipsum! Epicardo lorem ipsum...', autor: 'ElSasukeQlo',  categoria: '⚠️ Aviso', id:1},
		{titulo: 'Erentia viva!', body: 'Lorem ipsum! Epicardo lorem ipsum...', autor: 'Neshuo',  categoria: '🎉 Felicitación', id:2}
	]);

	const handleClick = () => {
	}

	return (
		<div className="inicio">
			{posts.map((noticias) => (
				<div className="post-preview" key={noticias.id}>
					<div className="post-header">
						<h2>{noticias.titulo}</h2>
						<a className="post-categoria">{noticias.categoria}</a>
					</div>
					<div className="post-autor">
						<p>Post creado por <b>{noticias.autor}</b></p>
					</div>
					<p>{noticias.body}</p>
				</div>
			))}
			<button onClick={handleClick}>Hazme clic</button>
		</div>
	);
}
 
export default Inicio;