import React, { useState } from 'react'
import axios from 'axios'

export default function ExerciseSearch(){
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  async function search(){
    if(!query) return
    setLoading(true)
    try {
      
      const res = await axios.get('https://wger.de/api/v2/exercise/', {
        params: { language: 2, limit: 10, search: query }
      })
      setResults(res.data.results || [])
    } catch (err) {
      console.error(err)
      alert('Error fetching exercises — check console.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-brand mb-4">Exercise Search</h3>
      <div className="mb-3">
        <input placeholder="e.g. squat" value={query} onChange={e=>setQuery(e.target.value)}
               className="w-full p-2 border rounded" />
      </div>
      <div className="flex gap-2">
        <button onClick={search} className="bg-brand text-white px-3 py-2 rounded">{loading ? 'Searching...' : 'Search'}</button>
        <button onClick={()=>{ setQuery(''); setResults([]) }} className="px-3 py-2 border rounded">Clear</button>
      </div>

      <div className="mt-4 space-y-3">
        {results.length === 0 && <p className="text-sm text-gray-500">No results yet.</p>}
        {results.map((r)=>(
          <div key={r.id} className="border rounded p-3">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <h4 className="font-semibold">{r.name}</h4>
                <div className="text-sm text-gray-600 mt-1" dangerouslySetInnerHTML={{__html: r.description ? r.description.slice(0,200) + (r.description.length>200 ? '...' : '') : '—'}} />
              </div>
              <div>
                <button className="bg-brand text-white px-2 py-1 rounded text-sm">Add Exercise</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
