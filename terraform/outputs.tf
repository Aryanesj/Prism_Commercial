# --- Outputs -------------------------------------------------------------
output "load_balancer_ip" {
  value       = google_compute_global_address.load_balancer_ip.address
  description = "IP address of the Load Balancer"
}

output "bucket_name" {
  value       = local.bucket_name
  description = "GCS Bucket name for static site content"
}

output "domain" {
  value       = "prism.com.ua"
  description = "The domain name"
}

output "ssl_certificate" {
  value       = google_compute_managed_ssl_certificate.ssl_cert.name
  description = "Managed SSL Certificate name"
}
