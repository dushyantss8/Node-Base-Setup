import seedAdminUser from "./adminSeeder/seeder.ts";

async function main() {
  try {
    console.log('Seeding Database 🌱');

    // Call the seeder functions 
    await seedAdminUser();

    console.log('Seeding Complete. 😀');
  } catch (error) {
    console.error('❌ Error while seeding:', error);
    process.exit(1);
  }
}

main().finally(() => {
  process.exit(0);
});
