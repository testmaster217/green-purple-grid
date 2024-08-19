export default function ZoomButtons() {
    return <form>
        {/* TODO: Add functionality to the zoom controls and figure out what to put
         as the <output>'s "for" attribute. */}
        <button type="button">🔍+</button>
        <span>Zoom: <output name="zoomPercent"></output>%</span>
        <button type="button">🔍-</button>
    </form>
}