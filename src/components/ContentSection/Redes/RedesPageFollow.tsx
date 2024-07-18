import React from 'react';

const RedesPageFollow = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mt-4 max-w-full">
            <h2 className="text-green-700 font-bold mb-4">Síguenos</h2>
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61555683550086&tabs=timeline&width=300&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="400"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default RedesPageFollow;
