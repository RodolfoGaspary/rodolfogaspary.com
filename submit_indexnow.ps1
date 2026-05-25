$body = @{
  host = "www.rodolfogaspary.com"
  key = "48824f99a87646249873f0b7948ebdbf"
  keyLocation = "https://www.rodolfogaspary.com/cf83e1357eefb8bdf1542850d66d8007.txt"
  urlList = @(
    "https://www.rodolfogaspary.com/",
    "https://www.rodolfogaspary.com/servicios.html",
    "https://www.rodolfogaspary.com/trabajo.html",
    "https://www.rodolfogaspary.com/sobre-mi.html",
    "https://www.rodolfogaspary.com/preguntas-frecuentes.html",
    "https://www.rodolfogaspary.com/contacto.html",
    "https://www.rodolfogaspary.com/blog.html",
    "https://www.rodolfogaspary.com/blog/cuanto-cuesta-pagina-web-peru.html",
    "https://www.rodolfogaspary.com/blog/errores-sitio-web-pierde-clientes.html",
    "https://www.rodolfogaspary.com/blog/seo-vs-geo-que-necesita-tu-empresa.html",
    "https://www.rodolfogaspary.com/blog/estrategia-digital-pymes-lima.html"
  )
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "https://api.indexnow.org/IndexNow" -Method Post -Body $body -ContentType "application/json; charset=utf-8"
Write-Host "IndexNow API Response: $response"
