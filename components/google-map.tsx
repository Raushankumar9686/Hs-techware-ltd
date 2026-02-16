export function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-lg border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118153.3837698709!2d73.10164335!3d22.3071588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1707900000000!5m2!1sen!2sus"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="HS Techware Location - Vadodara, Gujarat"
      />
    </div>
  )
}
