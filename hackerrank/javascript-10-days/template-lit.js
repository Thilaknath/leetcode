
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const A = expressions[0]
    const P = expressions[1]

    let s1 = (P + Math.sqrt(P**2 - 16 * A)) / 4
    let s2 = (P - Math.sqrt(P**2 - 16 * A)) / 4

    if (s1 > s2) {
        return [s2, s1] 
    } 

    return [s1, s2]
}

sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
