import { iter } from '@aureooms/js-itertools' ;

export default function* flatten ( root ) {

	// assert root.type === 'node'

	const stack = [
		{
			type : 'node' ,
			nonterminal : root.nonterminal ,
			production : root.production ,
			children : iter( root.children ) ,
		}
	] ;

	while ( stack.length !== 0 ) {

		const tree = stack.pop();

		const { done , value } = tree.children.next();

		if ( !done ) {

			stack.push(tree);

			const child = value ;

			if ( child.type === 'leaf' ) yield child ;

			else {

				const newchild = {
					type : 'node' ,
					nonterminal : child.nonterminal ,
					production : child.production ,
					children : iter(child.children) ,
				} ;

				stack.push(newchild);

			}

		}

	}
}
