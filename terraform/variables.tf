# --- Variables -----------------------------------------------------------
variable "credentials_file" {
  type        = string
  description = "GCP credentials JSON file"
}

variable "project" {
  type        = string
  description = "GCP Project ID"
  default     = "swift-kiln-388310"
}

variable "region" {
  type        = string
  description = "GCP Region"
  default     = "europe-west3"
}

variable "zone" {
  type        = string
  description = "GCP Zone"
  default     = "europe-west3-a"
}

variable "github_token" {
  type        = string
  description = "GitHub Personal Access Token"
}

variable "github_owner" {
  type        = string
  description = "GitHub owner"
  default     = "Aryanesj"
}

variable "github_repository" {
  type        = string
  description = "GitHub repository"
  default     = "Prism_Commercial"
}

variable "source_ranges" {
  type        = list(string)
  description = "A list of source IP ranges to allow incoming traffic from"
  default     = ["0.0.0.0/0"]
}

variable "domain_name" {
  type        = string
  description = "The domain name for the static site"
  default     = "prism.com.ua"
}
