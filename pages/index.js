import * as React from 'react'
import * as fc from 'fast-check'
import pr from 'pure-rand'

function Page() {
    React.useEffect(() => {
        const random = new fc.Random(pr.xoroshiro128plus(0))
        console.log(fc.string().generate(random).value)
    }, [])

    return <div>INDEX</div>
}

export default Page