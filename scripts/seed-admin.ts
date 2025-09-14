import { auth } from "@/lib/auth";
const seedAdmin = async () => {
  try {
    const adminEmail = 'admin@tredexstore.in';
    const adminPassword = 'secret'; // In a real app, use a more secure password and manage it safely
    const admin = await auth.api.createUser({
      body: {
        name: "Admin",
        email: adminEmail,
        password: adminPassword,
      }
    });

    console.log('Admin user created successfully!');
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);

  } catch (error) {
    if (error instanceof Error && error.message.includes('UNIQUE constraint failed')) {
      console.log('Admin user already exists.');
    } else {
      console.error('Error creating admin user:', error);
    }
  } finally {
    process.exit(0);
  }
};

seedAdmin().catch((err) => {
  console.error('Failed to seed admin user:', err);
  process.exit(1);
});
