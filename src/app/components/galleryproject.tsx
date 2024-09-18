import Link from 'next/link';

export default function GalleryProject(props: { name: string, desc?: string, link?: string }) {
    return (
        <div className="p-4 md:p-6 text-center">
            <h2 className="text-2xl md:text-3xl">{props.name}</h2>
            {props.desc &&
                <p className="md:text-lg p-2">{props.desc}</p> 
            }
            {props.link &&
                <Link href={props.link} className="pt-2 text-blue-500">Learn more about {props.name}</Link>
            }
        </div>
    );
  }