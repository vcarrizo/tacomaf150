/* ============================================================
   TACOMA Maderas — Datos del panel interno
   ------------------------------------------------------------
   Esta es la base de datos "oficial" de contactos: la que vive
   en GitHub y ve todo el que entra al panel real.

   El panel también permite agregar contactos desde el botón
   "+ Nuevo contacto" directo en el navegador, pero esos quedan
   guardados SOLO en esa computadora (localStorage) — no se
   suben solos a este archivo ni a GitHub. Para que un contacto
   nuevo quede disponible para todos, hay que sumarlo acá abajo
   y subir el archivo a GitHub (pedíselo a Claude con los datos
   y lo deja listo).

   El botón "Restaurar datos originales" del panel borra lo que
   se haya agregado/tocado en esa compu y vuelve exactamente a
   lo que dice este archivo.

   Campos disponibles por contacto:
     tipo        -> "cliente" | "proveedor" | "transportista" | "chofer"
     nombre      -> Razón social o nombre y apellido
     cuit        -> CUIT/CUIL con guiones, ej: "30-71234567-8"
     telefono    -> Teléfono/WhatsApp (opcional)
     email       -> Email (opcional)
     direccion   -> Dirección (opcional)
     vehiculo    -> Patente / datos del vehículo (transportistas y choferes)
     chofer      -> Nombre del chofer habitual (opcional, en fichas de transportista)
     dniChofer   -> DNI (opcional)
     notas       -> Cualquier aclaración útil (opcional)
   ============================================================ */

const CONTACTOS_SEED = [
  // ── CLIENTES (destinatarios en F150 ya presentados) ──
  {
    id: 1,
    tipo: "cliente",
    nombre: "Pablo Pedro Díaz",
    cuit: "20-17624309-1",
    direccion: "El Zorzal 1684, Boulogne Sur Mer, Buenos Aires"
  },
  {
    id: 2,
    tipo: "cliente",
    nombre: "CLP SRL",
    cuit: "30-69459252-6",
    direccion: "Aguirre 736, Capital Federal"
  },
  {
    id: 3,
    tipo: "cliente",
    nombre: "Todoesponja S.R.L.",
    cuit: "30-69602731-1",
    direccion: "Calle 142 N°32, Berazategui, Buenos Aires"
  },
  {
    id: 4,
    tipo: "cliente",
    nombre: "Distribuidora G M SRL",
    cuit: "33-70926766-9",
    direccion: "Tucumán 1427, Capital Federal"
  },

  // ── TRANSPORTISTAS ──
  {
    id: 5,
    tipo: "transportista",
    nombre: "Nobak Marcos Javier",
    cuit: "20-25169359-6",
    direccion: "Corrientes 700, Campo Viera, Oberá, Misiones",
    vehiculo: "Patente Chasis DUV645 — Acoplado BFJ495",
    chofer: "Nobak Marcos Javier",
    dniChofer: "25.169.359",
    notas: "Es transportista y chofer a la vez (dueño del vehículo)."
  },
  {
    id: 6,
    tipo: "transportista",
    nombre: "Servicentro San José S.A.S",
    cuit: "30-71686270-0",
    direccion: "Sarmiento 1976, San José, Colón, Entre Ríos",
    vehiculo: "Patente Chasis FHG582 — Acoplado ERK133",
    chofer: "Emilio Romero",
    dniChofer: "36.056.795",
    notas: "Figura como NO_INSCRIPTO en la observación del F150."
  },

  // ── CHOFERES ──
  {
    id: 7,
    tipo: "chofer",
    nombre: "Nobak Marcos Javier",
    cuit: "20-25169359-6",
    direccion: "Corrientes 700, Campo Viera, Oberá, Misiones",
    dniChofer: "25.169.359",
    vehiculo: "Patente Chasis DUV645 — Acoplado BFJ495",
    notas: "Mismo titular del transporte Nobak Marcos Javier."
  },
  {
    id: 8,
    tipo: "chofer",
    nombre: "Emilio Romero",
    cuit: "20-36056795-9",
    direccion: "La Plaza 1605, San José, Colón, Entre Ríos",
    dniChofer: "36.056.795",
    notas: "Chofer habitual de Servicentro San José S.A.S."
  }

  // ── PROVEEDORES ──
  // Todavía no hay proveedores cargados. Mandame los datos
  // (razón social, CUIT, dirección) y los sumo acá.
];
