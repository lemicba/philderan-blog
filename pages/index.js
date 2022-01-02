import { createClient } from 'contentful';
import NotesCards from '../components/notesCards';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'notes' })

  return {
    props: {
      notes: res.items
    }
  }
}

export default function Notes({ notes }) {
  console.log(notes)
  return (
    <div className="recipe-list">
      {notes.map( note => (
        <NotesCards key={note.sys.id} note={note} />
      ))}
      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}