function ItemListContainer ({sectionTitle, sectionSubtitle, pad}) {
    return (
        <div style={{padding: pad,}}>
            <div>
                <h2>
                {sectionTitle}
                </h2>
                <div>
                    <h4>{sectionSubtitle}</h4>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer   